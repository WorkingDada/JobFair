import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please add a name"],
        unique: true,
        trim: true,
        maxlength: [50, "Name cannot be more than 50 characters"],
      },
      business: {
        type: String,
        required: [true, "Please add business description"],
      },
      address: {
        type: String,
        required: [true, "Please add an address"],
      },
      province: {
        type: String,
        required: [true, "Please add a province"],
      },
      postalcode: {
        type: String,
        required: [true, "Please add a postalcode"],
        maxlength: [5, "Postalcode cannot be more than 5 digits"],
      },
      tel: {
        type: String,
      },
      picture: {
        type: String,
        required: [true, "Please add URL to company picture"],
      },
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
    }
  );

  const Company = mongoose.models.Company || mongoose.model("Company",CompanySchema)
export default Company;