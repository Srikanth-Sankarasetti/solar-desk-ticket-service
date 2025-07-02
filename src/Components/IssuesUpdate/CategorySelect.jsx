import { forwardRef, useRef, useEffect, useState } from "react";
import { Search } from "lucide-react";
import {
  PlantselectFormContainer,
  StyledPlantSelectionButtonContainer,
  StyledChevronDown,
  StyledSlectFormContainer,
  StyledInputSearch,
  StyledPlantsListShowSelect,
  StyledPlantNameSelect,
} from "../TicketRaise/plantselectionStyle";

const CategorySelect = forwardRef(
  (
    {
      options,
      value,
      onChange,
      placeholder = "Select User...",
      changeSelectedCategory,
    },
    ref
  ) => {
    const [isOpen, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const dropDownRef = useRef(null);

    const changeCategory = (v) => {
      changeSelectedCategory(v);
    };

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const fileterIssueCategory = options.filter((opt) =>
      opt.category.toLowerCase().includes(search.toLowerCase())
    );

    const selectedCategory = options.find((opt) => opt.category === value);

    return (
      <PlantselectFormContainer ref={dropDownRef}>
        <StyledPlantSelectionButtonContainer onClick={() => setOpen(!isOpen)}>
          <span style={{ fontSize: "1.5rem" }}>
            {" "}
            {selectedCategory?.category || placeholder}
          </span>
          <StyledChevronDown data-is-open={isOpen} />
        </StyledPlantSelectionButtonContainer>
        {isOpen && (
          <StyledSlectFormContainer>
            <div style={{ position: "relative" }}>
              <Search
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "30px",
                  color: "var(--formText)",
                  width: "15px",
                }}
              />
              <StyledInputSearch
                type="search"
                placeholder="Search Plant Name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {fileterIssueCategory.map((opt) => (
              <StyledPlantsListShowSelect
                key={opt.id}
                onClick={() => {
                  onChange(opt.category);
                  setOpen(false);
                  setSearch("");
                  changeCategory(opt.category);
                }}
              >
                <StyledPlantNameSelect>{opt.category}</StyledPlantNameSelect>
              </StyledPlantsListShowSelect>
            ))}
          </StyledSlectFormContainer>
        )}
      </PlantselectFormContainer>
    );
  }
);

CategorySelect.displayName = "CategorySelect";

export default CategorySelect;
