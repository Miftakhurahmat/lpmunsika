import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";

export default function Edit({ auth, sportify }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        title: sportify.title,
        link: sportify.link,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("sportify.update", sportify.id)),
            { onSuccess: () => reset };
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Sportify Edit: {sportify.title}
                </h2>
            }
        >
            <Head title="Sportify Edit" />

            <div className="m-5 2xl:mx-20 lg:mx-20">
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="" className="font-semibold text-lg">
                            Title
                        </label>
                        <input
                            name="title"
                            value={data.title}
                            className="px-3 py-1 mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={(e) => setData("title", e.target.value)}
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="" className="font-semibold text-lg">
                            Link
                        </label>
                        <input
                            name="link"
                            value={data.link}
                            className="px-3 py-1 mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={(e) => setData("link", e.target.value)}
                        />
                    </div>
                    <InputError
                        message={[errors.title, errors.link]}
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
