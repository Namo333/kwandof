import React from "react";
import Container from "@/components/pages/Container";
import Reviews from "@/components/pages/Reviews";
import content from "../../content";
import TypographyRenderer from "../../TypographyRenderer";

const page = () => {
  const pageContent = content["pledge/credit-room"];

  return (
    <Container>
      <main className="py-[90px]">
        <section>
          <TypographyRenderer title={pageContent.title} blocks={pageContent.blocks} />
        </section>
        <Reviews />
      </main>
    </Container>
  );
};

export default page;