

export interface IProduct {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    liked: boolean;
    category: string;
    description: string;

}