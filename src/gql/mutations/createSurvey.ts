import { gql } from "@apollo/client";

export const SAVE_TEXT_ACTIVITY = gql`
  mutation SaveTextActivity($id: Int!, $text: String!, $locked: Boolean) {
    SaveTextActivity(id: $id, text: $text, locked: $locked) {
      id
      text
      isLocked
    }
  }
`;
