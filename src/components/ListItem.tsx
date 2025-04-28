
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { type Product, useShoppingContext } from '../context/ShoppingContext';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

type ListItemProps = {
  product: Product;
};

export const ListItem = ({ product }: ListItemProps) => {
  const { toggleProductCheck, updateProductQuantity, removeProduct } = useShoppingContext();

  return (
    <div className={`flex items-center p-3 rounded-lg border mb-2 animate-fade-in ${
      product.checked ? 'bg-muted border-muted' : 'bg-card'
    }`}>
      <Checkbox 
        checked={product.checked} 
        onCheckedChange={() => toggleProductCheck(product.id)}
        className="mr-3"
      />
      
      <div className="flex-1">
        <p className={`font-medium ${product.checked ? 'line-through text-muted-foreground' : ''}`}>
          {product.name}
        </p>
        <span className="text-xs text-muted-foreground">{product.category}</span>
      </div>
      
      <div className="flex items-center space-x-1">
        <Button 
          size="icon" 
          variant="outline" 
          className="h-7 w-7" 
          onClick={() => updateProductQuantity(product.id, Math.max(1, product.quantity - 1))}
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <span className="w-6 text-center">{product.quantity}</span>
        
        <Button
          size="icon"
          variant="outline"
          className="h-7 w-7"
          onClick={() => updateProductQuantity(product.id, product.quantity + 1)}
        >
          <Plus className="h-3 w-3" />
        </Button>
        
        <Button
          size="icon"
          variant="ghost"
          className="h-7 w-7 ml-1 text-muted-foreground hover:text-destructive"
          onClick={() => removeProduct(product.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
