export const submitData = async (e, addDoc, collection, db) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  try {
    const docRef = await addDoc(collection(db, "reports"), {
      date: new Date(),
      name: formData.get("name"),
      work: formData.get("work"),
      comment: formData.get("comment")
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    const code = typeof error?.code === "string" ? error.code : "unknown";
    // エラー全体には設定値などが含まれ得るため、コードだけを出す。
    console.error("Error adding document:", code);
  }
};
