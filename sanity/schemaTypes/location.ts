import { Rule } from "@sanity/types";
import { MapPin } from "lucide-react";


export default {
    name: "location",
    title: "Location",
    type: "document",
    icon: MapPin,
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule : Rule) => Rule.required().min(2).max(100),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule : Rule) => Rule.max(500),
      },
      {
        name: "coordinates",
        title: "Coordinates",
        type: "geopoint",
        validation: (Rule : Rule) => Rule.required(),
      },
    ],
  };