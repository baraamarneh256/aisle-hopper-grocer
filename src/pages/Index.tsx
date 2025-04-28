
import React from 'react';
import { Layout } from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useShoppingContext } from '../context/ShoppingContext';

const Index = () => {
  const { products } = useShoppingContext();
  
  const uncheckedCount = products.filter(p => !p.checked).length;
  const totalItems = products.length;
  
  return (
    <Layout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Aisle Hopper</h1>
          <p className="text-muted-foreground">Your grocery shopping companion</p>
        </div>
      </div>
      
      {totalItems > 0 ? (
        <Card className="mb-6 border-primary/20 bg-primary/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Shopping List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">{uncheckedCount} items remaining</p>
                <p className="text-xs text-muted-foreground">{totalItems - uncheckedCount} items checked</p>
              </div>
              <Button asChild>
                <Link to="/list">View List</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">Create your first shopping list and start shopping smarter!</p>
            <Button asChild>
              <Link to="/list">Create List</Link>
            </Button>
          </CardContent>
        </Card>
      )}
      
      <div className="grid grid-cols-2 gap-4">
        <Link to="/list" className="block">
          <div className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border hover:border-primary transition-colors h-full">
            <ShoppingCart className="h-8 w-8 mb-2 text-primary" />
            <span className="text-sm font-medium">Shopping List</span>
          </div>
        </Link>
        
        <Link to="/categories" className="block">
          <div className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border hover:border-primary transition-colors h-full">
            <ShoppingBag className="h-8 w-8 mb-2 text-primary" />
            <span className="text-sm font-medium">Categories</span>
          </div>
        </Link>
        
        <Link to="/stores" className="block">
          <div className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border hover:border-primary transition-colors h-full">
            <Store className="h-8 w-8 mb-2 text-primary" />
            <span className="text-sm font-medium">Find Stores</span>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
