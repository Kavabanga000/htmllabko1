document.addEventListener("DOMContentLoaded", function () {
    // ��������� ����� ������� ����
    document.getElementById("loginButton").addEventListener("click", function () {
        alert("�� ������ �� ������ �����!");
        window.location.href = "log.html"; // ������� �� �������� �����
    });

    document.getElementById("registerButton").addEventListener("click", function () {
        alert("�� ������ �� ������ ������������������!");
        window.location.href = "reg.html"; // ������� �� �������� �����������
    });

    document.getElementById("lr10Button").addEventListener("click", function () {
        alert("�� ������ �� ������ lr10!");
        window.location.href = "lr10.html"; // ������� �� �������� lr10
    });

    document.getElementById("lr13Button").addEventListener("click", function () {
        alert("�� ������ �� ������ lr13!");
        window.location.href = "lr13.html"; // ������� �� �������� lr13
    });

    document.getElementById("practButton").addEventListener("click", function () {
        alert("�� ������ �� ������ ��������!");
        window.location.href = "��������.html"; // ������� �� �������� ��������
    });

    // ���������� ������������ ������� ��� ������ � ���������
    document.querySelectorAll("nav button a").forEach(function (anchor) {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // ����������� ������� ���� � ������
    document.getElementById("currentDate").textContent = "����������� ����" + new Date().toLocaleDateString();

    // ������ ������������� ���������� JS
    const today = new Date().getDay();
    switch (today) {
        case 0:
            console.log("������� �����������");
            break;
        case 1:
            console.log("������� �����������");
            break;
        case 2:
            console.log("������� �������");
            break;
        case 3:
            console.log("������� �����");
            break;
        case 4:
            console.log("������� �������");
            break;
        case 5:
            console.log("������� �������");
            break;
        case 6:
            console.log("������� �������");
            break;
        default:
            console.log("������ ����������� ��� ������");
    }

    // ����� for, while, do..while
    for (let i = 0; i < 5; i++) {
        console.log("for: " + i);
    }

    let j = 0;
    while (j < 5) {
        console.log("while: " + j);
        j++;
    }

    let k = 0;
    do {
        console.log("do..while: " + k);
        k++;
    } while (k < 5);

    // ��������� break � continue
    for (let m = 0; m < 10; m++) {
        if (m === 3) continue;
        if (m === 7) break;
        console.log("break/continue: " + m);
    }
});

// ������ ������������� confirm � prompt
function handleConfirm() {
    const userConfirmed = confirm("�� �������, ��� ������ ����������?");
    if (userConfirmed) {
        const userName = prompt("������� ���� ���:");
        alert("������, " + userName + "!");
    } else {
        alert("�������� ��������.");
    }
}

document.getElementById("confirmButton").addEventListener("click", handleConfirm);
