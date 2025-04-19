import React from 'react';
import { Button } from './button';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';

export function MenuButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Home</DropdownMenuItem>
        <DropdownMenuItem>Trending</DropdownMenuItem>
        <DropdownMenuItem>Subscriptions</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Library</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>History</DropdownMenuItem>
        <DropdownMenuItem>Your Videos</DropdownMenuItem>
        <DropdownMenuItem>Watch Later</DropdownMenuItem>
        <DropdownMenuItem>Liked Videos</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 