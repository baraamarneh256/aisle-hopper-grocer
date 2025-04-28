
import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  { name: 'Fruits', image: '/placeholder.svg', color: 'bg-red-100' },
  { name: 'Vegetables', image: '/placeholder.svg', color: 'bg-green-100' },
  { name: 'Dairy', image: '/placeholder.svg', color: 'bg-blue-100' },
  { name: 'Meat', image: '/placeholder.svg', color: 'bg-orange-100' },
  { name: 'Bakery', image: '/placeholder.svg', color: 'bg-yellow-100' },
  { name: 'Frozen', image: '/placeholder.svg', color: 'bg-teal-100' },
  { name: 'Pantry', image: '/placeholder.svg', color: 'bg-gray-100' },
  { name: 'Beverages', image: '/placeholder.svg', color: 'bg-purple-100' },
  { name: 'Household', image: '/placeholder.svg', color: 'bg-pink-100' },
  { name: 'Personal Care', image: '/placeholder.svg', color: 'bg-indigo-100' },
];

const Categories = () => {
  return (
    <Layout>
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-2">
          <Button size="icon" variant="ghost">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Categories</h1>
          <p className="text-sm text-muted-foreground">Browse products by category</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Card key={category.name} className="overflow-hidden animate-fade-in">
            <div className={`h-24 ${category.color}`}>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain opacity-60 p-2"
              />
            </div>
            <CardContent className="p-3 text-center">
              <h3 className="font-medium">{category.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
