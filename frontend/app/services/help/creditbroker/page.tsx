import React from "react";
import Container from "@/components/pages/Container";
import Reviews from "@/components/pages/Reviews";
import content from "../../content";
import TypographyRenderer from "../../TypographyRenderer";
import Test from "@/components/pages/Test";

const page = () => {
  const pageContent = content["help/credit-broker"];

  return (
    <Container>
      <main className="py-[90px]">
        <section>
          <TypographyRenderer title={pageContent.title} blocks={pageContent.blocks} />
        </section>
        <Reviews />
        <Test/>
      </main>
    </Container>
  );
};

export default page;
