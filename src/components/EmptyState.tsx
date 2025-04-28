
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionLink?: string;
};

export const EmptyState = ({ title, description, actionLabel, actionLink }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center h-[60vh]">
      <div className="bg-muted rounded-full p-4 mb-4">
        <ShoppingCart className="h-8 w-8 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-muted-foreground mt-2 max-w-sm">{description}</p>
      
      {actionLabel && actionLink && (
        <Button className="mt-6" asChild>
          <Link to={actionLink}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  );
};
