import { toast } from "react-toastify";


// data / post job   function
export  const DataLoader = async ({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}


// add  job submit function
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
  toast.success('Job Deleted');
  return;
}

// edit job submit function

export const EditJobSubmit = async (editJob) => {
  const res = await fetch(`/api/jobs/${editJob.id}`, {
      method:'PUT',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(editJob)
  });
  return;
}