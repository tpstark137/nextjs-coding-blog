import Container from "@/components/Container";
import { NavBar } from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <NavBar />
        </Container>
      </div>
      {children}
    </>
  );
}
