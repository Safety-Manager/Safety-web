export default function Information() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="bg-primary text-primary-foreground px-4 py-6 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">개인정보 처리방침</h1>
        </div>
      </header>
      <main className="flex-1 px-4 py-12 md:px-6">
        <div className="container mx-auto max-w-3xl space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              1. 수집하는 개인정보 항목
            </h2>
            <p className="text-muted-foreground mb-4">
              회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은
              개인정보를 수집하고 있습니다.
              <br />
              * 수집 항목: 이름, 로그인 ID, 비밀번호, 휴대전화번호, 이메일,
              서비스 이용 기록, 접속 로그, 쿠키
              <br />* 개인정보 수집 방법: 홈페이지(회원가입), 서비스 이용
            </p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              2. 개인정보의 수집 및 이용 목적
            </h2>
            <p className="text-muted-foreground mb-4">
              회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
              <br />
              * 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
              <br />
              * 회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량
              회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령
              확인, 만 14세 미만 아동 개인정보 수집 시 법정 대리인 동의 여부
              확인, 불만 처리 등 민원 처리, 고지사항 전달
              <br />* 마케팅 및 광고에 활용: 신규 서비스(제품) 개발 및 특화,
              이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스
              이용에 대한 통계
            </p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              3. 개인정보의 보유 및 이용 기간
            </h2>
            <p className="text-muted-foreground mb-4">
              원칙적으로, 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를
              지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로
              명시한 기간 동안 보존합니다.
              <br />
              * 보존 항목: 로그인 ID
              <br />
              * 보존 근거: 회원 탈퇴 시 재가입 방지
              <br />* 보존 기간: 1년
            </p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              4. 개인정보의 파기 절차 및 방법
            </h2>
            <p className="text-muted-foreground mb-4">
              회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당
              정보를 지체 없이 파기합니다. 파기 절차 및 방법은 다음과 같습니다.
              <br />
              * 파기 절차: 회원님이 회원가입 등을 위해 입력하신 정보는 목적이
              달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침
              및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용 기간
              참조) 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는
              법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로
              이용되지 않습니다.
              <br />* 파기 방법: 전자적 파일 형태로 저장된 개인정보는 기록을
              재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
            </p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold">5. 개인정보 제공</h2>
            <p className="text-muted-foreground mb-4">
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
              다만, 아래의 경우에는 예외로 합니다.
              <br />
              * 이용자들이 사전에 동의한 경우
              <br />* 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진
              절차와 방법에 따라 수사기관의 요구가 있는 경우
            </p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              6. 이용자의 권리와 그 행사 방법
            </h2>
            <p className="text-muted-foreground mb-4">
              이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나
              수정할 수 있으며, 가입 해지를 요청할 수도 있습니다.
              <br />* 개인정보 조회, 수정 및 가입 해지를 위해서는
              ‘개인정보변경’(또는 ‘회원정보수정’ 등)을 클릭하여 직접 열람,
              정정하거나, 개인정보 보호책임자에게 서면, 전화 또는 이메일로
              연락하시면 지체 없이 조치하겠습니다.
            </p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              7. 개인정보의 안전성 확보 조치
            </h2>
            <p className="text-muted-foreground mb-4">
              회사는 개인정보 보호법 제29조에 따라 다음과 같은 기술적/관리적 및
              물리적 조치를 하고 있습니다.
              <br />
              * 정기적인 자체 감사 실시
              <br />
              * 개인정보에 대한 접근 제한
              <br />
              * 접속기록의 보관 및 위변조 방지
              <br />
              * 개인정보의 암호화
              <br />
              * 해킹 등에 대비한 기술적 대책
              <br />* 비인가자에 대한 출입 통제
            </p>
          </section>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground px-4 py-6 md:px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Acme Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
