type Country = {
  name: string;
  flag: string;
};

export async function getCountries(): Promise<Country[]> {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag",
    );

    if (!res.ok) throw new Error("Failed to fetch countries");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("getCountries error:", error);
    throw error;
  }
}
