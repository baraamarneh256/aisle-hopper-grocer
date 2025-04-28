
import React from 'react';
import { Layout } from '../components/Layout';
import { StoreCard } from '../components/StoreCard';
import { useShoppingContext } from '../context/ShoppingContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Stores = () => {
  const { stores } = useShoppingContext();

  return (
    <Layout>
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-2">
          <Button size="icon" variant="ghost">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Find Stores</h1>
          <p className="text-sm text-muted-foreground">Grocery stores near you</p>
        </div>
      </div>
      
      <div className="relative mb-6">
        <Input 
          placeholder="Search for stores" 
          className="pr-10"
        />
        <MapPin className="absolute top-3 right-3 h-4 w-4 text-muted-foreground" />
      </div>
      
      <div className="space-y-4">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </Layout>
  );
};

export default Stores;
