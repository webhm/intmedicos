import {createRouter, createWebHistory} from "vue-router";
import IngresoMedicosView from "../views/IngresoMedicosView.vue";
import DashboardView from "../views/DashboardView.vue";
import ResultadosImagenLaboratorioMedicosView from "../views/ResultadosImagenLaboratorioMedicosView.vue";
import V2ResultadosImagenLaboratorioMedicosView from "../views/V2ResultadosImagenLaboratorioMedicosView.vue";
import BusquedaResultadosImagenLaboratorioMedicosView
    from "../views/BusquedaResultadosImagenLaboratorioMedicosView.vue";
import LabResultView from "../views/LabResultView.vue";
import ShareLabResultView from "../views/ShareLabResultView.vue";
import V2ShareLabResultView from "../views/V2ShareLabResultView.vue";
import ImageResultView from "../views/ImageResultView.vue";
import ShareImageResultView from "../views/ShareImageResultView.vue";
import V2ShareImageResultView from "../views/V2ShareImageResultView.vue";
import CurvaView from "../views/CurvaView.vue";
import ZeroView from "../views/ZeroView.vue";
import ShareZeroView from "../views/ShareZeroView.vue";
import V2ShareZeroView from "../views/V2ShareZeroView.vue";
import ZeroItemView from "../views/ZeroItemView.vue";
import ShareZeroItemView from "../views/ShareZeroItemView.vue";
import V2ShareZeroItemView from "../views/V2ShareZeroItemView.vue";
import BuzonDeSugerenciasView from "../views/BuzonDeSugerenciasView.vue";
import MiPerfilMedicoView from "../views/MiPerfilMedicoView.vue";
import DetallePacienteView from "../views/DetallePacienteView.vue";
import V2DetallePacienteView from "../views/V2DetallePacienteView.vue";
import MisPacientesView from "../views/MisPacientesView.vue";
import BibliotecaView from "../views/BibliotecaView.vue";
import HonorariosView from "../views/HonorariosView.vue";
import HonorariosPayedInvoicesView from "../views/HonorariosPayedInvoicesView.vue";
import PayedInvoiceView from "../views/PayedInvoiceView.vue";
import TransactionView from "../views/TransactionView.vue";
import AccountStatementView from "../views/AccountStatementView.vue";
import HonorariosPendingInvoicesView from "../views/HonorariosPendingInvoicesView.vue";
import HonorariosTransactionsView from "../views/HonorariosTransactionsView.vue";
import HonorariosAuditedView from "../views/HonorariosAuditedView.vue";
import HonorariosAccountStatementsView from "../views/HonorariosAccountStatementsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import {useAuthStore} from "../stores/auth";
import {computed} from "vue";
import {medicAuthSetToken} from "../services/medicAuth";
import auth from "../services/auth";
import {useNotification} from "@kyvg/vue3-notification";

const {notify} = useNotification();

let language = "es";
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {top: 0};
        }
    },
    routes: [
        // medicos
        //medic login
        // will match everything and put it under `$route.params.pathMatch`
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFoundView,
            meta: {
                authRequired: false,
                userType: "generic"
            }
        },
        // //mis pacientes
        {
            path: language === "es" ? "/mis-pacientes" : "/my-patients",
            name: "mis-pacientes",
            component: MisPacientesView,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_PACIENTES", "PERFIL_MEDICO_RESIDENTES"]
            }
        },
        // //patient detail
        {
            path: language === "es" ? "/mis-pacientes/:nhc" : "/my-patients/:nhc",
            name: "detalle-paciente",
            component: DetallePacienteView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_PACIENTES", "PERFIL_MEDICO_RESIDENTES"]
            }
        },
        // //patient detail
        {
            path: language === "es" ? "/paciente/:nhc" : "/patient/:nhc",
            name: "detalle-paciente-v2",
            component: V2DetallePacienteView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_PACIENTES", "PERFIL_MEDICO_RESIDENTES"]
            }
        },
        // patient graph view / medic
        {
            path: language === "es" ? "/mis-pacientes/:nhc/grafico-curva/:type/:na" : "/my-patients/:nhc/curve-graph/:type/:na",
            name: "medic-patient-curva-view",
            component: CurvaView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_PACIENTES", "PERFIL_MEDICO_RESIDENTES"]
            }
        },
        // patient lab result / medic
        {
            path: language === "es" ? "/mis-pacientes/:nhc/laboratorio/:url" : "/my-patients/:nhc/lab/:url",
            name: "medic-patient-lab-result-view",
            component: LabResultView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_PACIENTES", "PERFIL_MEDICO_RESIDENTES"]
            }
        },
        // patient image result / medic
        {
            path: language === "es" ? "/mis-pacientes/:nhc/imagen/:url" : "/mis-pacientes/:nhc/image/:url",
            name: "medic-patient-image-result-view",
            component: ImageResultView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_PACIENTES", "PERFIL_MEDICO_RESIDENTES"]
            }
        },

        // patient zerofootprint view / medic
        {
            path: "/zerofootprint/:nhc",
            name: "medic-patient-zerofootprint-view",
            component: ZeroView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_PACIENTES", "PERFIL_MEDICO_RESIDENTES"]
            }
        },

        // share patient zerofootprint view / medic
        {
            path: "/compartir/zerofootprint/:nhc",
            name: "share-medic-patient-zerofootprint-view",
            component: ShareZeroView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: []
            }
        },
        // share patient zerofootprint view / medic
        {
            path: "/compartir-v2/zerofootprint/:nhc",
            name: "share-v2-patient-zerofootprint-view",
            component: V2ShareZeroView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: []
            }
        },
        // patient zerofootprint view / medic
        {
            path: "/zerofootprint-item/:id",
            name: "medic-patient-zerofootprint-item-view",
            component: ZeroItemView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_PACIENTES", "PERFIL_MEDICO_RESIDENTES"]
            }
        },
        // share patient zerofootprint view / medic
        {
            path: "/compartir/zerofootprint-item/:id",
            name: "share-medic-patient-zerofootprint-item-view",
            component: ShareZeroItemView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: []
            }
        },
        // share patient zerofootprint view / medic
        {
            path: "/compartir-v2/zerofootprint-item/:id",
            name: "share-v2-patient-zerofootprint-item-view",
            component: V2ShareZeroItemView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: []
            }
        },

        // share lab result / medic
        {
            path: language === "es" ? "/compartir/:nhc/laboratorio/:url" : "/share/:nhc/lab/:url",
            name: "share-lab-result-view",
            component: ShareLabResultView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: []
            }
        },

        // share lab result / medic
        {
            path: language === "es" ? "/compartir-v2/:nhc/laboratorio/:url" : "/share/:nhc/lab/:url",
            name: "v2-share-lab-result-view",
            component: V2ShareLabResultView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: []
            }
        },
        // share image result / medic
        {
            path: language === "es" ? "/compartir/:nhc/imagen/:url" : "/share/:nhc/image/:url",
            name: "share-image-result-view",
            component: ShareImageResultView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: []
            }
        },
        // share image result / medic
        {
            path: language === "es" ? "/compartir-v2/:nhc/imagen/:url" : "/share/:nhc/image/:url",
            name: "v2-share-image-result-view",
            component: V2ShareImageResultView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: []
            }
        },
        //patient results search / medic
        {
            path: language === "es" ? "/resultados-imagen-y-laboratorio" : "/image-and-lab-results",
            name: "resultados-imagen-y-laboratorio-medicos",
            component: BusquedaResultadosImagenLaboratorioMedicosView,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_RESULTADOS"]
            }
        },
        // //patients medic results
        {
            path: language === "es" ? "/resultados-imagen-y-laboratorio/:nhc" : "/image-and-lab-results/:nhc",
            name: "resultados-paciente-imagen-y-laboratorio-medicos",
            component: ResultadosImagenLaboratorioMedicosView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_RESULTADOS"]
            }
        },
        // //patients medic results
        {
            path: language === "es" ? "/resultados/paciente/:nhc" : "/results/patient/:nhc",
            name: "resultados-paciente-imagen-y-laboratorio-medicos-v2",
            component: V2ResultadosImagenLaboratorioMedicosView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_RESULTADOS"]
            }
        },
        // lab result search / medic
        {
            path: language === "es" ? "/resultados-imagen-y-laboratorio/:nhc/laboratorio/:url" : "/image-and-lab-results/:nhc/lab/:url",
            name: "medic-lab-result-view",
            component: LabResultView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_RESULTADOS"]
            }
        },
        // image result search / medic
        {
            path: language === "es" ? "/resultados-imagen-y-laboratorio/:nhc/imagen/:url" : "/image-and-lab-results/:nhc/image/:url",
            name: "medic-image-result-view",
            component: ImageResultView,
            props: true,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: ["PERFIL_MEDICO_RESULTADOS"]
            }
        },
        // //general
        // //dashboard
        {
            path: "/",
            name: "dashboard",
            component: DashboardView,
            meta: {
                authRequired: false,
                userType: "generic",
                roles: []
            }
        },
    ]
});
router.beforeEach(async (to, from, next) => {
    if (to.name === "ingreso") {
        next({
            name: "dashboard"
        });
    }
    console.log("auth no es requerido");
    next();
});

export default router;
