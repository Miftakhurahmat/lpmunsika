import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";

export default function Edit({ auth, category }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        category_name: category.category_name,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("category.update", category.id)),
            { onSuccess: () => reset };
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Category Edit: {category.category_name}
                </h2>
            }
        >
            <Head title="Category Edit" />

            <div className="m-5 2xl:mx-20 lg:mx-20">
                <form onSubmit={submit}>
                    <label htmlFor="" className="font-semibold text-lg">
                        Category Name
                    </label>
                    <input
                        name="category_name"
                        value={data.category_name}
                        placeholder="What's New?"
                        className="px-3 py-1 mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={(e) =>
                            setData("category_name", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.category_name}
                        className="mt-3"
                    />
                    <PrimaryButton processing={processing} className="mt-10">
                        Save
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
