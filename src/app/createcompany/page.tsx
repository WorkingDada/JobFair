import { dbConnect } from "@/db/dbConnect";
import { redirect } from "next/navigation";
import Company from "@/db/models/Company";
import TopMenu from "@/components/TopMenu";

export default function CreateCompany() {

    const handleSubmit = async (CreateCompanyForm: FormData) => {
        'use server'
        const name = CreateCompanyForm.get('name');
        const address = CreateCompanyForm.get('address')
        const business = CreateCompanyForm.get('business')
        const province = CreateCompanyForm.get('province')
        const postalcode = CreateCompanyForm.get('postalcode')
        const tel = CreateCompanyForm.get('tel')
        const picture = CreateCompanyForm.get('picture')

        // Connect to Database and Create User
        try {
            await dbConnect()
            const company = await Company.create({
                "name": name,
                "address": address,
                "business": business,
                "province": province,
                "postalcode": postalcode,
                "tel": tel,
                "picture": picture,
            })
        } catch (error) {
            console.log("Create Company Error")
            console.log(error)
        }
        redirect("/company")
    };

    return (
        <div>
            <TopMenu />
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
                <div className="flex w-full max-w-4xl px-40">
                    {/* Company Sign-Up Box */}
                    <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <div className="w-full max-w-md px-6 py-10 bg-white rounded-3xl shadow-md bg-gradient-to-r from-purple-600 to-pink-600">
                            <h2 className="mb-6 text-2xl font-semibold text-center text-white">Create New Company</h2>
                            <form className="space-y-4" action={handleSubmit}>
                                {/* Adjusted form fields for Company */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Company Name"
                                    required
                                    className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                                />
                                <input
                                    type="address"
                                    name="address"
                                    placeholder="Company Address"
                                    required
                                    className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                                />
                                <input
                                    type="business"
                                    name="business"
                                    placeholder="Company Business"
                                    required
                                    className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                                />
                                <input
                                    type="province"
                                    name="province"
                                    placeholder="Company Province"
                                    required
                                    className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                                />
                                <input
                                    type="postalcode"
                                    name="postalcode"
                                    placeholder="Company Postalcode"
                                    required
                                    className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                                />
                                <input
                                    type="tel"
                                    name="tel"
                                    placeholder="Company Telephone Number"
                                    required
                                    className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                                />
                                <input
                                    type="picture"
                                    name="picture"
                                    placeholder="Company Picture Link"
                                    required
                                    className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                                />
                                <button
                                    type="submit"
                                    className="w-full px-6 py-2 text-white text-lg bg-green-500 font-semibold rounded-full hover:bg-green-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                                >
                                    Create Company!
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}