import { getLocations } from "@/app/sanity";
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
          <div key={location._id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{location.name}</h2>
            <p className="text-gray-600">{location.description}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching locations:", error);
    return <div>Error loading locations</div>;
  }
}
