
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { ListItem } from '../components/ListItem';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, ArrowLeft } from 'lucide-react';
import { useShoppingContext } from '../context/ShoppingContext';
import { EmptyState } from '../components/EmptyState';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const categories = [
  'Fruits', 'Vegetables', 'Dairy', 'Meat', 'Bakery', 'Frozen', 'Pantry', 'Beverages', 'Household', 'Personal Care'
];

const ShoppingList = () => {
  const { products, addProduct, clearCheckedProducts } = useShoppingContext();
  const [newProductName, setNewProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Fruits');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  const handleAddProduct = () => {
    if (newProductName.trim()) {
      addProduct({
        name: newProductName.trim(),
        category: selectedCategory,
        checked: false,
        quantity: 1,
      });
      setNewProductName('');
      setIsAddDialogOpen(false);
    }
  };

  const hasCheckedItems = products.some(p => p.checked);

  return (
    <Layout>
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-2">
          <Button size="icon" variant="ghost">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Shopping List</h1>
          <p className="text-sm text-muted-foreground">
            {products.length === 0 ? 'Add items to your list' : `${products.length} items`}
          </p>
        </div>
      </div>
      
      {products.length > 0 ? (
        <>
          <div className="space-y-1 mb-8">
            {products.map((product) => (
              <ListItem key={product.id} product={product} />
            ))}
          </div>
          
          {hasCheckedItems && (
            <div className="mt-4 mb-4 text-center">
              <Button variant="outline" onClick={clearCheckedProducts}>
                Clear checked items
              </Button>
            </div>
          )}
        </>
      ) : (
        <EmptyState 
          title="Your list is empty"
          description="Add some items to your shopping list to get started."
          actionLabel="Add first item"
          actionLink="#"
        />
      )}
      
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
          <Button className="fixed bottom-24 right-4 rounded-full h-14 w-14 shadow-lg">
            <Plus className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Item</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input
              placeholder="Item name"
              value={newProductName}
              onChange={(e) => setNewProductName(e.target.value)}
              className="w-full"
            />
            
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    type="button"
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="justify-start h-auto py-2"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <Button onClick={handleAddProduct} className="w-full">
              Add Item
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default ShoppingList;
