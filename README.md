Issue https://github.com/vercel/next.js/issues/53838

### To Reproduce

Run repro repo locally. 

```
git clone git@github.com:0xc00010ff/nextjs-bug-formdata.git
cd nextjs-bug-formdata
npm install
npm run dev
open http://localhost:3000
```

- Fill out the simple form
<img width="1714" alt="Screen Shot 2023-08-09 at 11 54 03 PM" src="https://github.com/vercel/next.js/assets/4950729/f64d2f2e-6a6c-493a-ac13-5a80d6671e4c">


- Observe app crash with 500 status and the following error: 

<img width="647" alt="Screen Shot 2023-08-09 at 11 51 14 PM" src="https://github.com/vercel/next.js/assets/4950729/1b3739e2-06cc-4a13-abe7-2c02430183ca">

### Describe the Bug

The simplest version of a POST route handler with form data fails at  
`const formData = await request.formData();`


![Screen Shot 2023-08-09 at 11 49 17 PM](https://github.com/vercel/next.js/assets/4950729/62db479f-59c5-4788-8828-e26d454ac9c5)
