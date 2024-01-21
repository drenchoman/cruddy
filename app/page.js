import Image from 'next/image';
import Api from '@/api/api';
import { Suspense } from 'react';
import Button from '@/api/button';

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading quote...</p>}>
        <Api />
      </Suspense>
      <Button />
    </>
  );
}
