import React from 'react';
import styles from './products.less';
import { useMutation, useQuery, useQueryClient } from 'umi';
import axios from 'axios';
import ProductList from '@/components/ProductList';

export default function Page() {
  const queryClient = useQueryClient()

  const productQuery = useQuery(['products'], {
    queryFn() {
      return axios.get('/api/products').then(res => res.data)
    }
  })

  const productsDeleteMutation = useMutation({
    mutationFn(id: string) {
      return axios.delete(`/api/products/${id}`)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  if (productQuery.isLoading) return null

  return (
    <div>
      <h1 className={styles.title}>Page products</h1>
      <ProductList
        products={productQuery.data.data}
        onDelete={(id) => {
          productsDeleteMutation.mutate(id);
        }}
      />
    </div>
  );
}
