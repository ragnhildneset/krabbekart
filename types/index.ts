export type Location = {
    _id: string;
    name: string;
    description: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}