

// data loader function
export  const DataLoader = async ({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}


// add / post job submit function
export const AddJobSubmit = async (newJob) => {
const res = await fetch('/api/jobs', {
    method:'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(newJob)
});

return;

}

// delete job
export const DeleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
      method:'DELETE'
  });
  return;
}