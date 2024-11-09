import { Button, CircularProgress } from "@mui/material";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { setToastAction } from "../../store/actions/appActions";
import { Check } from "@mui/icons-material";

export default function AddEmploye() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      Nom: '',
      Prenom: '',
      Email: '',
      Adresse: '',
    },
    validationSchema: Yup.object({
      Nom: Yup.string().required(t('form.required-field')),
      Prenom: Yup.string().required(t('form.required-field')),
      Email: Yup.string().required(t('form.required-field')),
      Adresse: Yup.string().required(t('form.required-field')),
    }),
    onSubmit: (values) => {
      console.log(values)
      dispatch(
        setToastAction({
          severity: "success",
          summary: t("suces"),
          detail: t('save-sucess'),
          life: 2000,
        })
      );
      setVisible(false)
    },
  });


  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-0">
      <div className="pt-1">
        <span className="font-bold white-space-nowrap text-black" style={{ fontSize: "16px" }}>
          Ajouter employé
        </span>
      </div>
    </div>
  );

  return (
    <div>
      <Button variant="contained" onClick={() => setVisible(true)}>
        Ajouter
      </Button>
      <Dialog header={headerElement} visible={visible} onHide={() => setVisible(false)}
        style={{ width: "50vw" }} breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <form onSubmit={formik.handleSubmit} className='w-full'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="Nom">Nom <span className='text-destructive'>*</span></label>
              <InputText
                id="Nom"
                name="Nom"
                value={formik.values.Nom}
                onChange={formik.handleChange}
                aria-describedby="Nom-help"
                placeholder='Nom'
                className={formik.touched.Nom && Boolean(formik.errors.Nom) ? 'p-invalid' : ''}
              />
              {formik.touched.Nom &&
                <small id="Nom-help" className='text-destructive leading-3'>
                  {formik.errors.Nom}
                </small>
              }
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Prenom">Prenom <span className='text-destructive'>*</span></label>
              <InputText
                id="Prenom"
                name="Prenom"
                value={formik.values.Prenom}
                onChange={formik.handleChange}
                aria-describedby="Prenom-help"
                placeholder='Prenom'
                className={formik.touched.Prenom && Boolean(formik.errors.Prenom) ? 'p-invalid' : ''}
              />
              {formik.touched.Prenom &&
                <small id="Prenom-help" className='text-destructive leading-3'>
                  {formik.errors.Prenom}
                </small>
              }
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Email">Email <span className='text-destructive'>*</span></label>
              <InputText
                id="Email"
                name="Email"
                value={formik.values.Email}
                onChange={formik.handleChange}
                aria-describedby="Email-help"
                placeholder='Email'
                className={formik.touched.Email && Boolean(formik.errors.Email) ? 'p-invalid' : ''}
              />
              {formik.touched.Email &&
                <small id="Email-help" className='text-destructive leading-3'>
                  {formik.errors.Email}
                </small>
              }
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Adresse">Adresse <span className='text-destructive'>*</span></label>
              <InputText
                id="Adresse"
                name="Adresse"
                value={formik.values.Adresse}
                onChange={formik.handleChange}
                aria-describedby="Adresse-help"
                placeholder='Adresse'
                className={formik.touched.Adresse && Boolean(formik.errors.Adresse) ? 'p-invalid' : ''}
              />
              {formik.touched.Adresse &&
                <small id="Adresse-help" className='text-destructive leading-3'>
                  {formik.errors.Adresse}
                </small>
              }
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button type='submit' variant="contained"
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Check />}
              disabled={loading}>
              Enregistrer
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
