export interface Product {
    objectID: string;
    image: string;
    title: string;
    description: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export interface CartItem extends Product {
    quantity: number;
    objectID: string;
  }
  
  export interface CartContextType {
    cart: any[];
    addToCart: (product: Product) => void;
    removeFromCart: (objectID : string) => void;
    loading:boolean
    error:  string | null;
    setCart: (product: any) => void;
  }
  