import { getLocations } from "@/app/sanity";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Location } from "@/types";

export default async function LocationList() {
  try {
    const locations = await getLocations();
    console.log("Fetched locations:", locations);

    if (!locations || locations.length === 0) {
      return <div>No locations found</div>;
    }

    return (
      <div className="grid gap-4 p-4">
        {locations.map((location: Location) => (
          <Card key={location._id}>
            <CardHeader>
              <CardTitle>{location.name}</CardTitle>
              <CardDescription>{location.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching locations:", error);
    return <div>Error loading locations</div>;
  }
}
