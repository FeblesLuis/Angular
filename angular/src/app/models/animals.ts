// models/animals.ts

export interface Animals {
    id: number;
    name: string;
    img: string;
}

export class Animals {
    private animals: any = 
    [
        { 
            id:1, 
            name: "perro", 
            img:"https://imgs.search.brave.com/x6ppa5DR4qBySSL7k_pvQlZbSd714opZUOSl8EfNdG8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2FuYm9ybnMuY29t/L2ltZy9-d3d3LnNh/bmJvcm5zLmNvbS9i/bG9nX2ltYWdlcy9O/dWV2YSUyMHJlZ3Vs/YWNpb24lMjBwYXJh/JTIwdHJhZXIlMjBw/ZXJyb3MlMjBhJTIw/VVNBJTIwMjAyNC5w/bmc"
        },
        {
            id:2,
            name:"gato",
            img: "https://imgs.search.brave.com/Slj6c0RztxxhdpyqDiffzZGWDqjHAYd3lt-_966a8Xg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdmL05hZ2VjX2Nh/dC5qcGc"
        },
        {
            id:3,
            name:"Pajaro",
            img: "https://imgs.search.brave.com/AXG6LL0bclDTG01vk_iVxG7Fhznl5o8pcCw97RiI6oM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/ODIwMDYzMC9waG90/by9rb2xpYnJpLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1E/TDhjanBrUXpkbE45/SHVfQTdZR0Q4STQt/Rms4aGFPRjhQYUIx/Z2lhWmtRPQ"
        },

    ];

    getAnimals(): Animals[] {
        return this.animals;
    }
}
