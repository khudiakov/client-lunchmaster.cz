import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { LunchMaster } from "./component";

export const LunchMasterGQL = graphql(
  gql`
    query(
      $longitudeFrom: Float
      $longitudeTo: Float
      $latitudeFrom: Float
      $latitudeTo: Float
    ) {
      restaurants(
        longitudeFrom: $longitudeFrom
        longitudeTo: $longitudeTo
        latitudeFrom: $latitudeFrom
        latitudeTo: $latitudeTo
      ) {
        id
        name
        position {
          longitude
          latitude
        }
        lastWeekMenu {
          date
          food {
            name
            price
          }
        }
      }
    }
  `
)(LunchMaster);
