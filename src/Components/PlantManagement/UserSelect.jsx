import { useEffect, useRef, useState, forwardRef } from "react";

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

const UserSelect = forwardRef(
  ({ options, value, onChange, placeholder = "Select User..." }, ref) => {
    const [isOpen, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const dropDownRef = useRef(null);

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

    const filteredPlant = options.filter((opt) => {
      return opt.name.toLowerCase().includes(search.toLowerCase());
    });

    const selectedPlant = options.find((opt) => opt.id === value);

    return (
      <PlantselectFormContainer ref={dropDownRef}>
        <StyledPlantSelectionButtonContainer onClick={() => setOpen(!isOpen)}>
          <span>{selectedPlant?.name || placeholder}</span>
          <StyledChevronDown $isOpen={isOpen} />
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
            {filteredPlant.map((opt) => (
              <StyledPlantsListShowSelect
                key={opt.id}
                onClick={() => {
                  onChange(opt.id);
                  setOpen(false);
                  setSearch("");
                }}
              >
                <StyledPlantNameSelect>
                  {opt.name.charAt(0).toUpperCase() +
                    opt.name.slice(1).toLowerCase()}
                  <span style={{ color: "grey", fontSize: "1.2rem" }}>
                    {" "}
                    - {opt.role}
                  </span>
                </StyledPlantNameSelect>
              </StyledPlantsListShowSelect>
            ))}
          </StyledSlectFormContainer>
        )}
      </PlantselectFormContainer>
    );
  }
);

UserSelect.displayName = "UserSelect";

export default UserSelect;
