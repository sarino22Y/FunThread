import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Post from "@/src/feature/post/Post";
import { getLatestPosts } from "@/src/query/post.query";
import { count } from "console";
import { resolve } from "path";
import React from "react";

export default async function Home() {
    const session = await getAuthSession();

    const posts = await getLatestPosts(session?.user.id);

    const originArr = [1, 2, 3, 4, 5];
    //*************MAP*************/
    // Double la valeur du tableau
    const doubleArr = originArr.map(e => e * 2);
    console.log("doubleArr ", doubleArr);

    //*************FILTER*************/
    // Pair 
    const evenArr = originArr.filter(v => v % 2 == 0)
    console.log("evenArr ", evenArr);

    // impair
    const oddArr = originArr.filter(v => v % 2 != 0)
    console.log("oddArr ", oddArr);


    //*************REDUCE*************/
    // max
    const maxArr = originArr.reduce((max, e) => Math.max(max, e))
    console.log("maxArr ", maxArr);

    // min
    const minArr = originArr.reduce((min, e) => Math.min(min, e))
    console.log("minArr ", minArr);

    // somme
    const sommeArr = originArr.reduce((curr, e) => curr + e) 
    console.log("sommeArr ", sommeArr);

    // IS ODD VALUE
    const isOddValue = originArr.filter(e => e % 2 != 0).length != 0; 
    console.log("isOddValue ", isOddValue);

    const userList = [
        { name: "John", gender: "M", salary: 35000 },
        { name: "Marie", gender: "F", salary: 42000 },
        { name: "Alex", gender: "M", salary: 38000 },
        { name: "Alice", gender: "F", salary: 60000 },
    ];
    
    // valeur de salaire des hommes en ajoutant chacun 1000£
    const resultM = userList
                        .filter(e => e.gender == "M")
                        .map(e => e.salary + 1000)
                        .reduce((totalSalaryMen, salaryMen) => totalSalaryMen + salaryMen);
    console.log("resultM ", resultM);
    

    // await new Promise((r) => setTimeout(r, 2000));

    return <div className="divide-y divide-muted">
        {posts.map(p => (
            <Post post={p} key={p.id} />
        ))}
    </div>;
}
