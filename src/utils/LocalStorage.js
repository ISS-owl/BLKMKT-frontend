import axiosInstance from '../utils';
function setLocalStorage(studentId, password, token, refreshToken) {
    localStorage.setItem("studentId", studentId);
    localStorage.setItem("password", password);
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
}
function setSessionStorage(studentId, password) {
    sessionStorage.setItem("studentId", studentId);
    sessionStorage.setItem("password", password);

}

function initAxiosInstance() {
    axios.interceptors.response.use(function (response) {
        if (response.data.code == 12000 || response.data.code == 12001 || response.data.code == 12002 || response.data.code == 12003 || response.data.code == 12004 || response.data.code == 12005) {
            let studentId;
            let password;
            if (sessionStorage.getItem("password") == "") {
                if (localStorage.getItem("password") == "") {
                    this.$router.push('/login');
                    return;
                }
                else {
                    studentId = localStorage.getItem("studentId");
                }
            }
            else {
                studentId = sessionStorage.getItem("studentId");
            }
            if (sessionStorage.getItem("password") == "") {
                if (localStorage.getItem("password") == "") {
                    this.$router.push('/login');
                    return;

                } else {
                    password = localStorage.getItem("password");
                }
            }
            else {
                password = sessionStorage.getItem("password");
            }
            axiosInstance({
                method: "post",
                url: "/auth/login",
                data: {
                    password,
                    studentId,
                },
            })
                .then((res) => {
                    if (res.data.code == 200) {
                        this.$store.commit("setToken", res.data.token);
                        this.$store.commit("setRefreshToken", res.data.refresh_token);
                        this.$store.commit("setUserId", res.data.user.id);
                        this.$store.commit("setPagePos", 1);
                        setLocalStorage(
                            studentId,
                            password,
                            res.data.token,
                            res.data.refresh_token
                        );
                        setSessionStorage(studentId, password);

                        axiosInstance.defaults.headers.common["Authorization"] =
                            res.data.token;

                        sessionStorage.setItem("login", "true");
                        //处理登陆成功的情况
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
}

export { initAxiosInstance, setLocalStorage, setSessionStorage };