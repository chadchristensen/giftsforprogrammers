// CategoryLabel.spec.tsx

import { getByRole, render, screen } from "@testing-library/react";
// TODO: Update to use path alias
import CategoryLabel from "../../components/CategoryLabel";

test("renders the category label with correct capitalization and hyphenated category", () => {
    const category = "Tech";
    render(<CategoryLabel category={category} />);
    const categoryLabel = screen.getByRole("link", { name: category });

    expect(categoryLabel).toHaveTextContent(category);
    expect(categoryLabel).toHaveAttribute(
        "href",
        "/categories/tech"
    );
});