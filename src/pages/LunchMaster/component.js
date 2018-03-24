import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import BlurredBackground from "../../components/BlurredBackground";
import Menu from "../../components/Menu";
import RestaurantMarker from "../../components/RestaurantMarker";
import UserMarker from "../../components/UserMarker";
import Logo from "../../components/Logo";

import { Container, MapContainer, MenusContainer } from "./styles";

import { BackgroundImage } from "../../assets/images";
import env from "../../env";

const DEFAULT_LONGITUDE = 16.609;
const DEFAULT_LATITUDE = 49.194;

export class LunchMaster extends Component {
  state = {
    userPosition: null,
    highlightRestaurant: null
  };

  componentWillMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(position => {
        this.setState({
          userPosition: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      });
    }
  }

  render() {
    const { data: { loading, restaurants, refetch } } = this.props;
    const { userPosition, highlightRestaurant } = this.state;
    const filteredRestaurants = restaurants
      ? restaurants
          .map(restaurant => {
            const dayMenu = restaurant.lastWeekMenu.filter(
              menu =>
                new Date(menu.date).toDateString() === new Date().toDateString()
            );
            return {
              dayMenu: dayMenu.length > 0 ? dayMenu[0] : null,
              ...restaurant
            };
          })
          .filter(restaurant => restaurant.dayMenu != null)
      : [];

    return (
      <Container>
        <Logo style={{ position: "absolute", left: "20px", top: "0" }} />
        <MapContainer>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: env.GOOGLE_MAP_KEY,
              region: "cs"
            }}
            defaultCenter={{ lat: DEFAULT_LATITUDE, lng: DEFAULT_LONGITUDE }}
            zoom={18}
            onChange={({ bounds }) => {
              refetch({
                longitudeFrom: bounds.sw.lng,
                longitudeTo: bounds.ne.lng,
                latitudeFrom: bounds.sw.lat,
                latitudeTo: bounds.ne.lat
              });
            }}
          >
            {filteredRestaurants.map(restaurant => (
              <RestaurantMarker
                key={restaurant.id}
                highlighted={restaurant.id === highlightRestaurant}
                onMouseEnter={() => {
                  this.setState({ highlightRestaurant: restaurant.id });
                }}
                onMouseLeave={() => {
                  this.setState({ highlightRestaurant: null });
                }}
                lat={restaurant.position.latitude}
                lng={restaurant.position.longitude}
              />
            ))}
            {userPosition ? (
              <UserMarker
                lng={userPosition.longitude}
                lat={userPosition.latitude}
              />
            ) : null}
          </GoogleMapReact>
        </MapContainer>
        <BlurredBackground
          background={BackgroundImage}
          style={{
            flex: 2,
            display: "flex",
            boxShadow: "-2px 2px 10px 0px rgba(0,0,0,0.6)"
          }}
          containerStyle={{
            flex: 1,
            overflow: "auto"
          }}
        >
          <MenusContainer>
            {filteredRestaurants.map(restaurant => (
              <Menu
                key={restaurant.id}
                title={restaurant.name}
                menu={restaurant.dayMenu.food}
                highlighted={restaurant.id === highlightRestaurant}
                onMouseEnter={() => {
                  this.setState({ highlightRestaurant: restaurant.id });
                }}
                onMouseLeave={() => {
                  this.setState({ highlightRestaurant: null });
                }}
              />
            ))}
          </MenusContainer>
        </BlurredBackground>
      </Container>
    );
  }
}
