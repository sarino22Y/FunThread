"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useZodForm } from "@/components/ui/form1";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserEdit } from "@/src/query/user.query";
import { useRouter } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
    name: z.string().min(1).max(100),
    username: z.string().min(1).max(50),
    bio: z.string().min(1).max(500),
    link: z.string()
        .max(50)
        .regex(/^(http?:\/\/)?\w{0,6}(\/[\w \.-]*)*\/?(\?\w+=\w+)?$/, {
            message: "Invalid URL",
        }),
});

export type ProfileFormType = z.infer<typeof FormSchema>;

type ProfileFormProps = {
    onSubmit: (profile: ProfileFormType) => Promise<string> | void;
    user: UserEdit;
};

export const ProfileForm = ({ onSubmit, user }: ProfileFormProps) => {
    const form = useZodForm({
        schema: FormSchema,
        defaultValues: {
            name: user.name ?? '',
            username: user.username,
            bio: user.bio ?? '',
            link: user.link ?? '',
        },
    });
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // prevent the default form submission
        const values = form.getValues(); // get form values
        const url = await onSubmit(values);
        if (url) {
            router.push(url);
            window.location.href = url;
            router.refresh();
        }
      }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit}>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                            <Input placeholder="Nom" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{"Nom d'utilisateur"}</FormLabel>
                        <FormControl>
                            <Input placeholder="username" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                            <Textarea placeholder="bio" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Lien</FormLabel>
                        <FormControl>
                            <Input placeholder="exemple.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className="flex w-full justify-end mt-4">
                <Button size="sm">Valider</Button>
            </div>
            </form>
        </Form>
    );
};