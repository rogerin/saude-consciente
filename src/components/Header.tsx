
import { UserMenu } from "./UserMenu";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <h1 className="text-xl font-semibold">SaúdeAware</h1>
      <UserMenu />
    </header>
  );
}
