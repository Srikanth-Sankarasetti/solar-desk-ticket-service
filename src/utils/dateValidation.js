import * as yup from "yup";

const dateSchema = yup.object().shape({
  dateRange: yup
    .object()
    .shape({
      from: yup.date().required("Start Date Required").nullable(),
      to: yup
        .date()
        .nullable()
        .required("End Date required")
        .test("is-after", "End date must be after start date", function (to) {
          const { from } = this.parent;
          return !from || !to || to >= from;
        }),
    })
    .required("Date range required"),
  plantType: yup.string(),
  plantOwner: yup.string(),
  zone: yup.string(),
});

export default dateSchema;
