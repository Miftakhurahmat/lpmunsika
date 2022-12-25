import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";

export default function Create({ auth, categories }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        body: "",
        category_id: 1,
        image: null,
        is_active: 1,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("article.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Article Form
                </h2>
            }
        >
            <Head title="Article Form" />

            <div className="m-5 2xl:mx-20 lg:mx-20">
                <form onSubmit={submit}>
                    <label className="font-semibold text-lg">Title</label>
                    <input
                        name="title"
                        id="title"
                        type="text"
                        value={data.title}
                        className="px-3 py-1 mt-1 mb-5 block w-full border-gray-300 focus:border-slate-900 focus:ring-slate-900 rounded-md shadow-sm"
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    <label className="font-semibold text-lg">Body</label>
                    <textarea
                        name="body"
                        id="body"
                        rows="10"
                        className="block mt-1 mb-5 rounded-md shadow-sm border-gray-300 focus:border-slate-900 focus:ring-slate-900 w-full"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                    ></textarea>
                    <label className="font-semibold text-lg">Category</label>
                    <select
                        name="category_id"
                        id="category_id"
                        className="block mt-1 mb-5 rounded-md shadow-sm border-gray-300 focus:border-slate-900 focus:ring-slate-900 w-full"
                        onChange={(e) => setData("category_id", e.target.value)}
                    >
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.category_name}
                            </option>
                        ))}
                    </select>
                    <label className="font-semibold text-lg">Image</label>
                    <input
                        onChange={(e) => setData("image", e.target.files[0])}
                        type="file"
                        name="image"
                        id="image"
                        className="block mt-1 mb-5 w-full text-sm text-slate-500
                        file:mr-5 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-gray-500 file:text-slate-50 file:cursor-pointer
                    "
                    />
                    <label className="font-semibold text-lg">Status</label>
                    <select
                        name="status"
                        id="status"
                        className="block mt-1 mb-5 rounded-md shadow-sm border-gray-300 focus:border-slate-900 focus:ring-slate-900 w-full"
                        onChange={(e) => setData("is_active", e.target.value)}
                    >
                        <option value={1}>Publish</option>
                        <option value={2}>Draf</option>
                    </select>
                    <InputError
                        message={[
                            errors.title,
                            errors.body,
                            errors.category_id,
                            errors.image,
                            errors.is_active,
                        ]}
                        className="mt-3"
                    />
                    <PrimaryButton className="mt-10" processing={processing}>
                        Save
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
