'use client';

import React, { ReactElement } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({
  searchQuery,
  onSearchChange,
}: SearchBarProps): ReactElement {
  return (
    <InputGroup className="search-bar">
      <InputGroup.Text>
        <i className="fas fa-search"></i>
      </InputGroup.Text>
      <Form.Control
        type="text"
        placeholder="Search patients by name, email, contact, or condition..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchQuery && (
        <Button
          variant="outline-secondary"
          onClick={() => onSearchChange('')}
          title="Clear search"
        >
          <i className="fas fa-times"></i>
        </Button>
      )}
    </InputGroup>
  );
}
