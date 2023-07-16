import React, {PropsWithChildren} from 'react';
import Header from "@/layouts/Header";

const DefaultLayouts = ({ children }: PropsWithChildren) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default DefaultLayouts;