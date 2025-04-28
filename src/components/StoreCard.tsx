
import React from 'react';
import { type Store } from '../context/ShoppingContext';
import { Card, CardContent } from './ui/card';

type StoreCardProps = {
  store: Store;
};

export const StoreCard = ({ store }: StoreCardProps) => {
  return (
    <Card className="overflow-hidden animate-slide-up">
      <div className="h-32 bg-muted">
        <img
          src={store.image}
          alt={store.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg">{store.name}</h3>
        <p className="text-sm text-muted-foreground">{store.address}</p>
        <div className="flex justify-between mt-2">
          <span className="text-sm text-primary">{store.distance}</span>
          <button className="text-sm text-primary font-medium">Directions</button>
        </div>
      </CardContent>
    </Card>
  );
};
