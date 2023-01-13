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

    const save = () => {
        setData("body", document.querySelector("#x").getAttribute("value"));
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
            <Head>
                <title>Article Form</title>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://unpkg.com/trix@2.0.0/dist/trix.css"
                />
                <script
                    type="text/javascript"
                    src="https://unpkg.com/trix@2.0.0/dist/trix.umd.min.js"
                ></script>
            </Head>

            <div className="m-5 xl:mx-20">
                <form onSubmit={submit}>
                    <div>
                        <label className="font-semibold text-lg">Title</label>
                        <input
                            name="title"
                            id="title"
                            type="text"
                            value={data.title}
                            className="px-3 py-1 block w-full border-gray-300 focus:border-slate-900 focus:ring-slate-900 rounded-md shadow-sm"
                            onChange={(e) => setData("title", e.target.value)}
                        />
                    </div>
                    <div className="mt-5">
                        <label className="font-semibold text-lg">Body</label>
                        <input id="x" type="hidden" name="content" />
                        <trix-editor input="x"></trix-editor>
                        <div
                            onClick={() => save()}
                            className="hover:cursor-pointer w-min mt-3 border-slate-400 border p-1 text-slate-800 font-bold text-xs rounded"
                        >
                            save
                        </div>
                    </div>
                    <div className="mt-5">
                        <label className="font-semibold text-lg">
                            Category
                        </label>
                        <select
                            name="category_id"
                            id="category_id"
                            className="block rounded-md shadow-sm border-gray-300 focus:border-slate-900 focus:ring-slate-900 w-full"
                            onChange={(e) =>
                                setData("category_id", e.target.value)
                            }
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.category_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-5">
                        <label className="font-semibold text-lg">Image</label>
                        <input
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                            type="file"
                            name="image"
                            id="image"
                            className="block w-full text-sm text-slate-500
                        file:mr-5 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-gray-500 file:text-slate-50 file:cursor-pointer
                    "
                        />
                    </div>
                    <div className="mt-5">
                        <label className="font-semibold text-lg">Status</label>
                        <select
                            name="status"
                            id="status"
                            className="block rounded-md shadow-sm border-gray-300 focus:border-slate-900 focus:ring-slate-900 w-full"
                            onChange={(e) =>
                                setData("is_active", e.target.value)
                            }
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
                    </div>
                    <PrimaryButton className="mt-10" processing={processing}>
                        Save
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
