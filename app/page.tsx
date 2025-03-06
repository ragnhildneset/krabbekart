import LocationList from "@/app/components/LocationList";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">
        Oslos beste babyvennlige steder
      </h1>
      <LocationList />
    </main>
  );
}
