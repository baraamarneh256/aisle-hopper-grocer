
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Product = {
  id: string;
  name: string;
  category: string;
  checked: boolean;
  quantity: number;
};

export type Store = {
  id: string;
  name: string;
  address: string;
  distance: string;
  image: string;
};

type ShoppingContextType = {
  products: Product[];
  stores: Store[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  removeProduct: (id: string) => void;
  toggleProductCheck: (id: string) => void;
  updateProductQuantity: (id: string, quantity: number) => void;
  clearCheckedProducts: () => void;
};

const ShoppingContext = createContext<ShoppingContextType | undefined>(undefined);

export const useShoppingContext = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error('useShoppingContext must be used within a ShoppingProvider');
  }
  return context;
};

type ShoppingProviderProps = {
  children: ReactNode;
};

export const ShoppingProvider = ({ children }: ShoppingProviderProps) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const storedProducts = localStorage.getItem('shoppingList');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  // Sample stores data
  const [stores] = useState<Store[]>([
    {
      id: '1',
      name: 'Whole Foods Market',
      address: '123 Green St, Anytown',
      distance: '0.8 miles',
      image: '/placeholder.svg',
    },
    {
      id: '2',
      name: 'Trader Joe\'s',
      address: '456 Main St, Anytown',
      distance: '1.2 miles',
      image: '/placeholder.svg',
    },
    {
      id: '3',
      name: 'Safeway',
      address: '789 Oak Ave, Anytown',
      distance: '1.5 miles',
      image: '/placeholder.svg',
    },
    {
      id: '4',
      name: 'Costco',
      address: '101 Bulk Blvd, Anytown',
      distance: '3.2 miles',
      image: '/placeholder.svg',
    },
  ]);

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Date.now().toString(),
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const removeProduct = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const toggleProductCheck = (id: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };

  const updateProductQuantity = (id: string, quantity: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const clearCheckedProducts = () => {
    setProducts((prev) => prev.filter((product) => !product.checked));
  };

  return (
    <ShoppingContext.Provider
      value={{
        products,
        stores,
        addProduct,
        removeProduct,
        toggleProductCheck,
        updateProductQuantity,
        clearCheckedProducts,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
