import { useEffect, useRef, useState, forwardRef } from "react";
import { Search, MapPin } from "lucide-react";
import {
  PlantselectFormContainer,
  StyledPlantSelectionButtonContainer,
  StyledChevronDown,
  StyledSlectFormContainer,
  StyledInputSearch,
  StyledPlantsListShowSelect,
  StyledPlantNameSelect,
  StyledSelectMapin,
} from "./plantselectionStyle";

const PlantSelectForm = forwardRef(
  ({ options, value, onChange, placeholder = "Select plant..." }, ref) => {
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
      return opt.plantName.toLowerCase().includes(search.toLowerCase());
    });

    const selectedPlant = options.find((opt) => opt.id === value);

    return (
      <PlantselectFormContainer ref={dropDownRef}>
        <StyledPlantSelectionButtonContainer onClick={() => setOpen(!isOpen)}>
          <span>{selectedPlant?.plantName || placeholder}</span>
          <StyledChevronDown $isOpen={isOpen} />
        </StyledPlantSelectionButtonContainer>
        {isOpen && (
          <StyledSlectFormContainer>
            <div style={{ position: "relative", color: "var(--formText)" }}>
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
                <StyledPlantNameSelect>{opt.plantName}</StyledPlantNameSelect>
                <span style={{ color: "var(--formLabel)" }}>-</span>
                <StyledSelectMapin>
                  <MapPin style={{ width: "12px", height: "12px" }} />
                  {opt.Zone} . {opt.capacityKwp}Kwp .{opt.plantType} .
                  {opt.ownerName}
                </StyledSelectMapin>
              </StyledPlantsListShowSelect>
            ))}
          </StyledSlectFormContainer>
        )}
      </PlantselectFormContainer>
    );
  }
);

PlantSelectForm.displayName = "PlantSelectForm";

export default PlantSelectForm;
