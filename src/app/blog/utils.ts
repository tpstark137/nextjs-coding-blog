import fs from "fs";
import path from "path";
import matter from "gray-matter";

//Get all the mdx file from directory

function getMdxFiles (directory :string) {
    return fs.readdirSync(directory).filter((file)=>path.extname(file) === ".mdx");
}

//Then read data from those file

function readMdxFile(filePath:fs.PathOrFileDescriptor) {
    let rawContent = fs.readFileSync(filePath, "utf-8");
    return matter(rawContent);
}

//present the mdx data and metadata

function getMdxData(directory: string) {
    let mdxFile = getMdxFiles(directory);

    return mdxFile.map((file) => {
        let { data:metadata, content } = readMdxFile(path.join(directory, file));
        let slug = path.basename(file, ".mdx");

        return {
            metadata,
            content,
            slug,
        };
    })
}

export function getBlogPosts() {
    return getMdxData(path.join(process.cwd(), "src", "app", "blog", "contents"));
}

// we need to format date

export function formatDate(date:string, includeRelative = true) {
    let currentDate = new Date();
    if(!date.includes("T")) {
        date = `${date}T00:00:00`;
    }

    let targetDate = new Date(date);

    //show how old the post is ; example : 1y ago, 1m ago, 1d ago

    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    let daysAgo = currentDate.getDate() - targetDate.getDate();

    let formattedDate = "";

    if (yearsAgo > 0) { 
        formattedDate = `${yearsAgo}y ago`;
    }
    else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`;
    }
    else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`;
    }
    else {
        formattedDate = "Today";
    }

    let fullDate = targetDate.toLocaleString("en-us", {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    if(!includeRelative) {
        return fullDate;
    }
    return `${fullDate} (${formattedDate})`;
}

