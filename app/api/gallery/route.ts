import path from "path";
import { promises as fs } from "fs";
import { GalleryItem } from "@/app/_types/Types";

// Define the type for the JSON data items


export async function GET(request: Request): Promise<Response> {
  try {
    // Define the path to the db.json file
    const filePath = path.join(process.cwd(), "data", "db.json");

    // Read the JSON file
    const data = await fs.readFile(filePath, "utf-8");

    // Parse the JSON data
    const jsonData: GalleryItem[] = JSON.parse(data);

    // Get the title query parameter
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title");

    // Filter the data by title if the query parameter exists
    const filteredData = title
      ? jsonData.filter((item) =>
          item.title.toLowerCase().includes(title.toLowerCase())
        )
      : jsonData;

    // Return the filtered (or full) data
    return new Response(JSON.stringify(filteredData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
